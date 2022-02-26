const Category = require('../model/category.model');
const path = require('path');

// const { response } = require('express');
// const { redirect } = require('express/lib/response');
// const res = require('express/lib/response');
 

exports.addCategory = (request, response, next) => {
    console.log("Nmae : "+request.body.categoryName);
    console.log(request.file);
     let category= new Category();
    category.categoryName=request.body.categoryName;
    console.log(request.body);
      category.categoryImage=request.file.filename;
      category.save().then((result)=>{
        console.log("Succefully save");
        response.redirect('/admin/dashboard');
      }).catch((err)=>{
        console.log(err);
      });
    }
    exports.categoryLits=(req,res,err)=>{
      Category.fetchAllCategory().then((results)=>{
          console.log(results);
          // res.redirect("/category/category_list/:resultq");
          res.render("admin_views/category_list.ejs",{
            categoryList:results,

          });
      }).catch((err)=>{
  
      console.log(err);
      });
  
  }

    //const file = request.files.categoryImage;
        // const fileName = new Date().getTime() + file.name;
    // if (file) {
    //     const filePath = path.join(__dirname, "../", "public/images", fileName);
    //     file.mv(filePath, err => {
    //         if (!err) {
    //             if (request.body.categoryName && file) {
    //                 let category = new Category(request.body.categoryName, fileName);
    //                 category.save().then(result => {
    //                     // response.send( < div class = "
    //                     //     alert alert - primary " role="
    //                     //     alert ">
    //                     //     This is a primary alert— check it out!
    //                     //     <
    //                     //     /div>);
    //                     response.redirect("/admin/dashboard");
    //                 }).catch(err => {
    //                     response.send("Erro.........");
    //                 });
    //             }
    //         } else
    //             response.send("Error.........");
    //     });
    // }
