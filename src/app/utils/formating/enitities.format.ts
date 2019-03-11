/**
 * @export GetEntitites
 * @param {any} entities
 * @returns {any[]}
 */
export function GetEntities(entities): any[] {
	return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
}

export function GetStringKeyEntities(entities): any[] {
	return Object.keys(entities).map(key => {
		if (key) return entities[key];
	});
}

export function MapToEntities(obj, state: any) {
	return obj.reduce(
		(entities: { [id: number]: any }, page: any) => {
			return {
				...entities,
				[page.id]: page,
			};
		},
		{ ...state.entities }
	);
}

export function MapToFieldEntities(obj, state: any) {
	return obj.reduce(
		(fields: { [id: number]: any }, field: any) => {
			return { ...fields, [field.position]: field };
		},
		{ ...state.fields }
	);
}
