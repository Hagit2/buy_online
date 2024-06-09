 <BrowserRouter>
        <Routes>
          <Route >
            <Route path="" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/user" element={<User />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/add-order" element={<AddOrder />} />
          </Route>
        </Routes>
 </BrowserRouter>
