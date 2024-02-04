<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
  ></q-item>
 <div> {{ title }}</div>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;

}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
