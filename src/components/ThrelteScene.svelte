<script>
  import { T } from "@threlte/core";
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0);
  }}
/>

<T.Mesh>
  <T.SphereGeometry args={[1, 2, 1]} />
  <T.MeshBasicMaterial attach="material" wireFrame="true" color="#54ddff" />
</T.Mesh>
