import { PoseComponent } from '@plasmastrapi/ecs';
import { IController, IMouseEvent } from '@plasmastrapi/html5-canvas';
import MyEntity from 'app/entities/MyEntity';

export default class MyController implements IController {
  private __entity: MyEntity;

  public init(): void {
    this.__entity = new MyEntity({ x: 0, y: 0 });
  }

  public mousemove(event: IMouseEvent): void {
    this.__entity.$patch(PoseComponent, { x: event.x, y: event.y });
  }
}
