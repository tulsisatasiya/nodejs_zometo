const { CategoryService } = require("../services");



// Create a new category
const addCategory = async (req, res) => {
  try {
      const body = req.body;
      
      const categoryExist = await CategoryService.getbycategory(body.Category);

    if (categoryExist) {
      throw new Error("categoryExist already exists");
    }



    const category = await CategoryService.addCategory(body);

    res.status(201).json({
      success: true,
      message: "Category added successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();

    res.status(200).json({
      success: true,
      message: "All categories retrieved successfully",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update category by ID
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
      const body = req.body;
      
      const categoryExist = await CategoryService.getbycategory(body.Category);

      if (categoryExist) {
        throw new Error("categoryExist already exists");
      }

    const category = await CategoryService.updateCategory(categoryId, body);

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete category by ID
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await CategoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
