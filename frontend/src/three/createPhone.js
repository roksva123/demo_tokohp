import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export const PHONE_WIDTH = 0.78;
export const PHONE_HEIGHT = 1.6;
export const PHONE_DEPTH = 0.085;

export function createPhone() {
  const group = new THREE.Group();
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x89928c,
    metalness: 0.78,
    roughness: 0.25,
    clearcoat: 0.65,
    clearcoatRoughness: 0.12,
  });
  const body = new THREE.Mesh(
    new RoundedBoxGeometry(PHONE_WIDTH, PHONE_HEIGHT, PHONE_DEPTH, 8, 0.075),
    bodyMaterial,
  );
  group.add(body);

  const bezel = new THREE.Mesh(
    new RoundedBoxGeometry(0.735, 1.54, 0.018, 8, 0.045),
    new THREE.MeshPhysicalMaterial({
      color: 0x171b19,
      metalness: 0.45,
      roughness: 0.3,
    }),
  );
  bezel.position.z = 0.052;
  group.add(bezel);

  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.68, 1.43),
    new THREE.MeshStandardMaterial({
      color: 0x7a3f2d,
      emissive: 0x24100a,
      emissiveIntensity: 1.2,
      roughness: 0.3,
    }),
  );
  screen.position.z = 0.064;
  group.add(screen);

  const lensMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x202727,
    metalness: 0.8,
    roughness: 0.12,
    clearcoat: 1,
  });
  const lensRingMaterial = new THREE.MeshStandardMaterial({
    color: 0x111111,
    metalness: 0.9,
    roughness: 0.18,
  });
  [
    [-0.21, 0.54],
    [-0.21, 0.38],
    [-0.05, 0.54],
  ].forEach(([x, y]) => {
    const ring = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.07, 0.02, 32),
      lensRingMaterial,
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.set(x, y, 0.066);
    const lens = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.024, 32),
      lensMaterial,
    );
    lens.rotation.x = Math.PI / 2;
    lens.position.set(x, y, 0.078);
    group.add(ring, lens);
  });

  group.userData.phoneParts = { body, bezel, screen };
  return group;
}

export function disposePhone(phone) {
  phone.traverse((node) => {
    node.geometry?.dispose();
    const materials = Array.isArray(node.material)
      ? node.material
      : node.material
        ? [node.material]
        : [];
    materials.forEach((material) => {
      material.map?.dispose?.();
      material.dispose?.();
    });
  });
}
