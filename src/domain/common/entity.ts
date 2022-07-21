import { UniqueEntityIDGeneratorFactory } from "./id-generator-factory";
import { UniqueEntityID } from "./unique-entity-id";

export const isEntity = (entity: any) : entity is Entity<any> => {
  return entity instanceof Entity<any>
}

interface Properties {
  id?: UniqueEntityID
}

export abstract class Entity<T extends Properties> {
  public props: T;
  protected readonly _id: UniqueEntityID;
  
  constructor(props: T) {
    this.props = props
    const idGenerator = UniqueEntityIDGeneratorFactory.getInstance().getIdGeneratorFor(this)
    this._id = props.id ? props.id : idGenerator.nextID();
  }

  public equals(entity: Entity<T>): boolean {
    if (!entity || !isEntity(entity)) {
      return false
    }
    
    if (this === entity) {
      return true
    }
    
    return this._id.equals(entity._id);
  }
  
}
