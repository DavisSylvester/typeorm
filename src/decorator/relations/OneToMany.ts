import {getMetadataArgsStorage, ObjectType, RelationOptions} from "../../index.ts";
import {RelationMetadataArgs} from "../../metadata-args/RelationMetadataArgs.ts";

/**
 * One-to-many relation allows to create type of relation when Entity2 can have multiple instances of Entity1.
 * Entity1 have only one Entity2. Entity1 is an owner of the relationship, and storages Entity2 id on its own side.
 */
export function OneToMany<T>(typeFunctionOrTarget: string|((type?: any) => ObjectType<T>), inverseSide: string|((object: T) => any), options?: RelationOptions): Function {
    return function (object: Object, propertyName: string) {
        if (!options) options = {} as RelationOptions;

        let isLazy = options && options.lazy === true ? true : false;

        getMetadataArgsStorage().relations.push({
            target: object.constructor,
            propertyName: propertyName,
            // propertyType: reflectedType,
            isLazy: isLazy,
            relationType: "one-to-many",
            type: typeFunctionOrTarget,
            inverseSideProperty: inverseSide,
            options: options
        } as RelationMetadataArgs);
    };
}
