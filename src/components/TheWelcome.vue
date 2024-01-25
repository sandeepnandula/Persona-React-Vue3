<template>
<h1>I'm a Vue App. Below is the react component!</h1>
<MyReactComponent></MyReactComponent>
</template>

<script lang="ts">

import { applyReactInVue } from 'veaury';
import MyPersonaReactComponent from './MyPersonaReactComponent';

export default {
    components: {
        MyReactComponent: applyReactInVue(MyPersonaReactComponent)
    }
}

</script>
<style scoped>
iframe {
  height: 1500px;
  width: 100%;
}
</style>
```