import { reviews } from '../../data/data';

export async function GET() {
    return Response.json(reviews);
}