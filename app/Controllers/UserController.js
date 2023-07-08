function index() {
	connection.query('SELECT * FROM mytable', function (error, results, fields) {
		if (error) throw error;
		console.log(results);
	});

	connection.end();
}

function store() {

}

export default {
	index
}