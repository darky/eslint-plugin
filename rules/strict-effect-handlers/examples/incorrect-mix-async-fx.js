import { createEffect } from "effector";

async function f1() {}
const oneFx = createEffect();

const finalFx = createEffect(async () => {
  await f1();
  await oneFx();
});

export { finalFx };
