const tenantService = require('../services/tenantService');
const userService = require('../services/userService');

const processMessage = async (kafkaMessage) => {

	//Start working here
	if (kafkaMessage.event_name === "tenant_created") {
		console.log(kafkaMessage.properties)
		const addTenant = await tenantService.createTenant(kafkaMessage.properties)

		console.log(addTenant)
	} else if (kafkaMessage.event_name === "user_created") {
		const addUserProfile = await userService.createUser(kafkaMessage.properties)
		console.log(addUserProfile)
	}
};

module.exports = { processMessage };

