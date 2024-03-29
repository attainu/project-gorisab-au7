##Online-Hawker

---

**Contributors**

>     Gorisab Dodamani – gorisab2@gmail.com
>     Vinay Maurya- vinay.shermauryan@gmail.com
>
> Manish Mahant- Instructor
> Mohit Dadwani - Mentor

---

**About Project:**

● Street Hawkers are the blood veins of any city/town. Right?
● We have usually seen street hawkers or vegetable/fruit sellers on road or at roadside. They are spending one of most hard life. Struggling and roaming whole day in sun, rain and shivering winters just to earn bread and butter for their family.
A hard life. No
• But the situation is worst when he did not get his customers and orders.
For example a hawker is moving to East but his Customers are at West.
There is a gap in between that hawker and customer.
• To fil this gap, we are here. We are providing a suitable platform where customer can get his desirable items (vegetables/fruits) from a verified hawker.
• And Hawker has no need to roam in streets. He will get his orders from this platform and can deliver direct to customer’s home without any problem
• Customers can choose nearby hawkers within his area or pin code and can hawker or seller choose with their choice by looking at his ratings and reviews.
• Dual language- English and local language

---

####Role Rights

1. Hawker Post, Delete, update his items or vegetables/fruits, can upload photos of vegetables and fruits, change profile picture, Password, Forgot password.
1. Customers looking for Vegetables View the vegetables, order, Pay online, change profile picture & Password, Forgot password Chat with hawker, Feedback or comments and ratings.
1. Admin Change password, Forgot Password, view all posted Users, customers and items, view all orders, and block any user, customer and orders.
1. Customer support executives User and customer can report to CSE, CSE can block user, customer and order.

####End Points of APIs

1. Hawker Routes
   a. Add products
2. Customer's Routes
   a. Get products
   b. Order
3. Admin Routes

---

###Features

####REGISTRATION & LOGIN Related:

● Email Verification for Registration.
● Editing Password (After login).
● Resetting Passwords (System Generated Password via mail).
● Password recovery
● Handling errors
● Logout User

####User Related

● Hawker.
○ Name
○ Profile Picture
○ Add, Delete, Update products
○ Upload products photos
● Customers can view, filter, search, pay and order products.
● Profile updating (Profile Picture, Contact Number, Address Change, Adhaar No.)
● Instant notification via mail to both Hawker and Customer.
● Delete User file appropriately, when requested or violating norms.
● Hawker ID card
● Hawker listing nearby using Pincode

**Product Related:**

1.  Aggregations
1.  Product Count.
1.  Sorting
1.  Filtration
1.  Searching
1.  Pagination
1.  Products.
    a. Product Type
    b. Type
    c. Is Fresh
    d. Product Photos
    e. Price /kg or per piece
    f. Stock
    g. Ratings, Comments or Feedbacks
1.  Remove product
1.  Update product.

---

##Technologies used:

###Backend: -

1.  Nodemailer or other service _(To send system generated emails)_
1.  Fileupload or Multer + Cloudinary _(Converting System Image into URL)_
1.  ExpressJS _(Framework for node Js)_
1.  Json Web token _(For Authentication)_
1.  BcryptJS _(For Hashing)_
1.  Mongoose _(To Connect to NoSQL Database)_
1.  Heroku Deployment
1.  Documentation using Swagger, Insomnia or postman doc or appropriate service available

###Frontend: -

1. ReactJS
1. React-redux
1. React-Bootstrap
1. Google fonts
1. Font Awesome
1. React-toastify

###Future Goals:

1. Online hawker tracking
2. Packing and preservation
3. OTP verification
