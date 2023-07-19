import { IComponentMaster, IEntityMaster, System } from '@plasmastrapi/ecs';
import { IViewport } from '@plasmastrapi/viewport';
import MyEntity from 'app/entities/MyEntity';

export default class MySystem extends System {
  public once({
    entities,
  }: {
    entities: IEntityMaster;
    components: IComponentMaster;
    delta: number;
    viewport: IViewport<any>;
  }): void {
    entities.forEvery(MyEntity)((entity) => {
      // system logic
    });
  }
}
