import pool from "../database/SQL.js";
// import addNewTitleSchema from "../schemas/addNewTitleSchema.js";

export const getAllProject = async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM todo');
    const rows = data.rows
    console.log(rows)
    return res.status(200).json({rows});
  } catch (error) {}
};

// export const addNewTitle = async (req, res) => {
//   const validator = await addNewTitleSchema();

//   const { value, error } = validator.validate(req.body);

//   if (error) {
//     return res.status(401).json(error.details);
//   }

//   const { title, status } = value;
//   const lassTitle = await Project.find().sort({ _id: -1 }).limit(1);
//   const id = lassTitle.length > 0 ? lassTitle[0].id + 1 : 1;

//   const Title = {
//     title,
//     id,
//     status,
//   };
//   await Project.create({ ...Title });
//   return res.status(201).json({ ...Title });
// };

// export const updateStatus = async (req, res) => {
//   const { id, status } = req.body;
//   await Project.findOneAndUpdate(
//     { id },
//     {
//       status,
//     }
//   );

//   return res.status(200).json({ message: "status updated successfully" });
// };

// export const deleteTodo = async (req, res) => {
//   const { id } = req.params;
//   const todo = await Project.findOne({ id: +id });
//   await todo.deleteOne();

//   return res.status(200).json({ message: "todo deleted successfully" });
// };

// export const deleteCompleted = async (req, res) => {

//     await Project.deleteMany({ status: true });

//   return res.status(200).json({ message: "completed deleted successfully" });
// };
