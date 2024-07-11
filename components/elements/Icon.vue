<script setup>
const props = defineProps(["name", "filled", "fontControlled"]);
const icon = ref();

watchEffect(async () => {
  try {
    const iconsImport = import.meta.glob("/assets/icons/**.svg", {
    //   тут переписал параметры, так как Vite начал ругаться, что 'as' уже не поддерживается
      query: "?raw",
      import: 'default',
      eager: false,
    });
    const rawIcon = await iconsImport[`/assets/icons/${props.name}`]();
    icon.value = rawIcon;
  } catch {
    console.error(
      `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
    );
  }
});
</script>

<template>
    <span
      :class="{ 'nuxt-icon--fill': !filled,
                'nuxt-icon': fontControlled
       }"
      v-html="icon"
    />
</template>