import { menu } from '../../../data/data';

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const food = menu.find(
        (item: { id: number }) => item.id.toString() === id
    );

    if (!food) {
        return Response.json(
            { error: 'Food not found' },
            { status: 404 }
        );
    }

    return Response.json(food);
}