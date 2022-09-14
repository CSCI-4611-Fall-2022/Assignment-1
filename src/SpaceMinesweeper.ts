import * as gfx from 'gophergfx'

export class SpaceMinesweeper extends gfx.GfxApp
{
    private ship: gfx.Rectangle;

    private mousePosition: gfx.Vector2;

    constructor()
    {
        super();

        this.ship = new gfx.Rectangle();
        
        this.mousePosition = new gfx.Vector2();

        this.renderer.viewport = gfx.Viewport.CROP;
    }

    createScene(): void 
    {
        this.ship.material.texture = new gfx.Texture('./ship.png');
        this.ship.scale.set(0.08, 0.08);

        this.scene.add(this.ship);
    }

    update(deltaTime: number): void 
    {
        this.ship.lookAt(this.mousePosition);
    }

    onMouseMove(event: MouseEvent): void 
    {
        this.mousePosition.copy(this.getNormalizedDeviceCoordinates(event.x, event.y));
    }
}