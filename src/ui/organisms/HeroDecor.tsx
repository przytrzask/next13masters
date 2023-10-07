"use client";

import { proxy, useSnapshot } from "valtio";
import { type GLTF } from "three-stdlib";

import { useRef, useState, useEffect, Fragment } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	AccumulativeShadows,
	Center,
	useGLTF,
	Environment,
	RandomizedLight,
	useTexture,
	Decal,
} from "@react-three/drei";

import { easing } from "maath";
import type * as THREE from "three";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

const colors = ["#ccc", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934", "Purple"] as const;

type Store = {
	variant: "intro" | "customizer";
	color: (typeof colors)[number];
	decal: string;
};

const store = proxy<Store>({
	variant: "intro",
	color: "#726DE8",
	decal: "logo3d",
});

export function Decor() {
	const [eventSource, setEvent] = useState<HTMLElement | null>(
		null as unknown as HTMLCanvasElement,
	);

	useEffect(() => {
		setEvent(document?.getElementById("root"));
	}, [eventSource]);

	return (
		<div className="h-33 absolute inset-0 w-full">
			<Canvas
				shadows
				// @ts-expect-error TODO fixme
				eventSource={eventSource}
				camera={{
					position: [0, 0, 2.5],
					fov: 25,
				}}
				preserveDrawingl={{
					preserveDrawingBuffer: true,
				}}
				eventPrefix="client"
			>
				<ambientLight intensity={0.5} />
				<Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />

				<CameraRig>
					<Backdrop />
					<Center>
						<Shirt />
					</Center>
				</CameraRig>
			</Canvas>
		</div>
	);
}

type GLTFResult = GLTF & {
	nodes: {
		T_Shirt_male: THREE.Mesh;
	};
	materials: {
		lambert1: THREE.MeshStandardMaterial;
	};
};

const Shirt = () => {
	"use client";
	const snap = useSnapshot(store);
	const texture = useTexture(`/logo3d.png`);

	const { materials, nodes } = useGLTF("/shirt_baked.glb") as GLTFResult;

	useFrame((_state, delta) => {
		easing.dampC(materials?.lambert1?.color, snap.color, 0.25, delta);
	});

	return (
		<group rotation={[Math.PI / 2, 0, 0]}>
			<mesh
				castShadow
				geometry={nodes.T_Shirt_male.geometry}
				material={materials.lambert1}
				position={[0.419, 0, 0]}
				dispose={null}
				material-roughness={1}
			>
				<Decal
					position={[-0.4, 0.1, -0.35]}
					scale={[0.2, 0.12, 0.15]}
					rotation={[-1.5, 0, 0]}
					map={texture}
				/>
			</mesh>
		</group>
	);
};

function Backdrop() {
	"use client";

	const shadows = useRef(null);

	return (
		<AccumulativeShadows
			ref={shadows}
			temporal
			frames={60}
			alphaTest={0.1}
			scale={2}
			rotation={[Math.PI / 2, 0, 0]}
			position={[0, 0, -0.1]}
		>
			<RandomizedLight
				amount={4}
				radius={99}
				intensity={0.55}
				ambient={0.25}
				position={[5, 5, -10]}
			/>
			<RandomizedLight
				amount={4}
				radius={5}
				intensity={0.25}
				ambient={0.55}
				position={[-5, 5, -9]}
			/>
		</AccumulativeShadows>
	);
}

type CameraProps = {
	children: React.ReactNode;
};

function CameraRig({ children }: CameraProps) {
	const group = useRef<THREE.Group>(null);
	const snap = useSnapshot(store);
	useFrame((state, delta) => {
		easing.damp3(
			state.camera.position,
			[snap.variant === "intro" ? -state.viewport.width / 4 : 0, 0, 2],
			0.25,
			delta,
		);

		if (!group.current) return;
		easing.dampE(
			group.current?.rotation,
			[state.pointer.y / 10, -state.pointer.x / 2, 0],
			0.25,
			delta,
		);
	});
	return <group ref={group}>{children}</group>;
}

useGLTF.preload("/shirt_baked.glb");

export function Customizer() {
	const handleColorChange = (color: string) => {
		store.color = color;
	};

	return (
		<RadioGroup as={Fragment} name="color" value={store.color} onChange={handleColorChange}>
			<div className="absolute bottom-2  right-32 flex max-w-fit gap-4">
				{colors.map((color) => (
					<RadioGroup.Option
						key={color}
						value={color}
						className={clsx(
							// active && checked ? "ring ring-offset-1" : "",
							// !active && checked ? "ring-2" : "",
							"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
						)}
					>
						<RadioGroup.Label as="span" className="sr-only">
							{color}
						</RadioGroup.Label>
						<span
							style={{
								backgroundColor: color,
							}}
							aria-hidden="true"
							className={"h-8 w-8 rounded-full border border-black border-opacity-10"}
						/>
					</RadioGroup.Option>
				))}
			</div>
		</RadioGroup>
	);
}
