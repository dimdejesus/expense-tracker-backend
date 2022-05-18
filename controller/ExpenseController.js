//The purpose of this is to isolate the logic

export const findAll = (req, res) => {
	try {
		res.status(200).send([]);
	} catch (err) {
		res.status(500).json({ error: error.message });
	}
};

export const findById = (req, res) => {
	try {
		res.status(200).send([]);
	} catch (err) {
		res.status(500).json({ error: error.message });
	}
};

export const createExpense = (req, res) => {
	try {
		res.status(201).json({ message: `Post title "${post.title}" is successfully created` });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateExpense = (req, res) => {
	try {
		res.status(200).json({ message: `Post with ID ${post.id} is successfully updated` });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const deleteById = () => {
	try {
		res.status(200).json({ message: `Post with title ${post.title} is successfully deleted` });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
