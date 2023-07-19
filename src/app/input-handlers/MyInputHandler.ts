import { IMouseEvent, InputHandler, MOUSE_EVENT } from '@plasmastrapi/html5-canvas';
import { app } from 'app/main';

export default class MyInputHandler extends InputHandler {
  public init(): void {}

  public dispose(): void {}

  [MOUSE_EVENT.MOUSE_MOVE](event: IMouseEvent): void {
    app.controllers.custom.mousemove(event);
  }
}
