import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "@/lib/products"
import AdminProductList from "@/components/admin-product-list"
import AdminAddProduct from "@/components/admin-add-product"

export default async function AdminPage() {
  const products = await getAllProducts()

  return (
    <div className="flex flex-col gap-8 py-12">
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-xl text-muted-foreground">Manage your Metin2 systems and products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card className="bg-secondary/50 border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{products.length}</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,234</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+3 from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="add">Add New Product</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <Card className="bg-secondary/50 border-white/10">
              <CardHeader>
                <CardTitle>Manage Products</CardTitle>
                <CardDescription>View, edit, and delete your products</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminProductList products={products} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="add">
            <Card className="bg-secondary/50 border-white/10">
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>Create a new product to sell on your marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminAddProduct />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders">
            <Card className="bg-secondary/50 border-white/10">
              <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>View and manage customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No orders yet</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
