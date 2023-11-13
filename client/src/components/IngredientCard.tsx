import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export function IngredientCard() {
    return (
        <Card className="bg-secondary shadow-md outline">
            <CardHeader>
                <CardTitle>Rice</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    1/2 cups estimated
                </CardDescription>
                <CardDescription>
                    200 calories
                </CardDescription>
            </CardContent>
        </Card>
    );
}