<script>
  import { Canvas, T } from "@threlte/core";
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  // spheres' coordinate array
  export let posXArr = [-10, 3, 0];
  export let posYArr = [-4, 6, 0];
  export let posZArr = [-9, 0, 0];
  export let radArr = [1, 2, 0];
  export let heightArr = [4, 8, 0];
  export let widthArr = [2, 4, 0];

  // define thresholds (min, max)
  const minX = -30;
  const maxX = 10;
  const minY = -10;
  const maxY = 10;
  const minZ = -3;
  const maxZ = 3; 

  // define movement signs
  let signXArr = [1, 1, 1];
  let signYArr = [1, 1, 1];
  let signZArr = [1, 1, 1];

  function animate() {
    window.requestAnimationFrame(animate);
    // if it reaches a particular X threshold, reverse X sign
    // if it reaches a particular Y threshold, reverse Y sign
    // if it reaches a particular Z threshold, reverse Z sign
    for(let i = 0; i < 3; i++) {
      if(posXArr[i] <= minX && signXArr[i] === -1) signXArr[i] *= -1;
      if(posXArr[i] >= maxX && signXArr[i] === 1) signXArr[i] *= -1;
      if(posYArr[i] <= minY && signYArr[i] === -1) signYArr[i] *= -1;
      if(posYArr[i] >= maxY && signYArr[i] === 1) signYArr[i] *= -1;
      if(posZArr[i] <= minZ && signZArr[i] === -1) signZArr[i] *= -1;
      if(posZArr[i] >= maxZ && signZArr[i] === 1) signZArr[i] *= -1;

      // set movement
      posXArr[i] += (0.1 * signXArr[i]);
      posYArr[i] += (0.1 * signYArr[i]);
      posZArr[i] += (0.1 * signZArr[i]);
    }
    console.log("posXArr[0], ", posXArr[0]);
  }
  animate();
</script>
<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0);
  }}
/>

<T.Texture args={"../../static/billy.webp"}></T.Texture>

<T.Mesh position={[posXArr[0], posYArr[0], posZArr[0]]}>
  <T.SphereGeometry args={[radArr[0], heightArr[0], widthArr[0]]} />
  <T.MeshBasicMaterial attach="material" wireFrame="true" color="#54ddff" />
</T.Mesh>

<T.Mesh position={[posXArr[1], posYArr[1], posZArr[1]]}>
  <T.SphereGeometry args={[radArr[1], heightArr[1], widthArr[1]]} />
  <T.MeshBasicMaterial attach="material" wireFrame="true" color="#54ddff" />
</T.Mesh>

<T.Mesh position={[posXArr[2], posYArr[2], posZArr[2]]}>
  <T.SphereGeometry args={[radArr[2], heightArr[2], widthArr[2]]} />
  <T.MeshBasicMaterial attach="material" wireFrame="true" color="#54ddff" />
</T.Mesh>