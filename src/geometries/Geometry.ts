
export declare interface Attribute{
	vertices: number[];
	location?: number;
	stride?: number;
	vbo?: WebGLBuffer;
}

export declare interface Attributes{
	[key: string]: Attribute
}

export class Geometry{
	
	public attributes: Attributes = {};
	
	constructor(){

	}
	
	public addAttributes( name: string, array: number[], stride: number ){
		
		this.attributes[name] = {
			vertices: array,
			stride: stride,
		}

	}

}