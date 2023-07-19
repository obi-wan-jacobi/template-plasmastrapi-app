import { AnimationSystem } from '@plasmastrapi/animation';
import { FPSSystem } from '@plasmastrapi/diagnostics';
import { ImageSystem, LabelSystem, LineSystem, PoseSystem, ShapeSystem } from '@plasmastrapi/engine';
import { InputController } from '@plasmastrapi/html5-canvas';
import { AccelerationSystem, GravitySystem, ImpulseSystem, VelocitySystem } from '@plasmastrapi/physics';
import App from './App';
import MyController from './controllers/MyController';
import MySystem from './systems/MySystem';
import MyInputHandler from './input-handlers/MyInputHandler';

const canvas = document.getElementById('app-target') as HTMLCanvasElement;
canvas.width = 1280;
canvas.height = 720;
canvas.focus();

export const app = new App({
  canvas,
  controllers: {
    input: new InputController({ canvas }),
    custom: new MyController(),
  },
  systems: [
    // Base Systems
    PoseSystem,
    ShapeSystem,
    LineSystem,
    LabelSystem,
    ImageSystem,
    AnimationSystem,
    FPSSystem,
    ImpulseSystem,
    GravitySystem,
    AccelerationSystem,
    VelocitySystem,

    //My Systems
    MySystem,
  ],
});

app.init();
app.controllers.input.setHandler(MyInputHandler);
app.start();
