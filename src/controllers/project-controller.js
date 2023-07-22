import pool from "../database/SQL.js";
import addNewTitleSchema from "../schemas/addNewTitleSchema.js";

export const getAllProject = async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM TODO");
    const rows = data.rows;
    console.log(rows);
    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
  }
};

export const addNewTitle = async (req, res) => {
  const validator = await addNewTitleSchema();

  const { value, error } = validator.validate(req.body);

  if (error) {
    return res.status(401).json(error.details);
  }
  const { title, status } = value;

  try {
    await pool.query("INSERT INTO TODO(title,status) VALUES($1,$2)", [
      title,
      status,
    ]);
    return res.status(201).json("successfully created");
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const updateStatus = async (req, res) => {
  const { id, status } = req.body;

  try {
    await pool.query("UPDATE todo SET status = $1 WHERE id = $2", [status, id]);
    return res.status(200).json({ message: "status updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred while updating the status" });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    await pool.query("DELETE FROM todo WHERE id = $1", [id]);
    return res.status(200).json({ message: "dELETE successfully" });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred while DELETING the status" });
  }
};

// export const deleteCompleted = async (req, res) => {

//     await Project.deleteMany({ status: true });

//   return res.status(200).json({ message: "completed deleted successfully" });
// };
