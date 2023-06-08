<script>
  import { Canvas, T } from "@threlte/core";
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
</script>
<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0);
  }}
/>

  <!-- <Three type={OrbitControls}/> -->
<!-- </T.PerspectiveCamera> -->

<T.Mesh>
  <T.SphereGeometry args={[1, 2, 1]} />
  <T.MeshBasicMaterial attach="material" wireFrame="true" color="#54ddff" />
</T.Mesh>

<T.Mesh position={[6, 2, 0]}>
  <T.SphereGeometry args={[2, 4, 2]} />
  <T.MeshBasicMaterial attach="material" wireFrame="true" color="#54ddff" />
</T.Mesh>