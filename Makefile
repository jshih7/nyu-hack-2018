FORCE:

# Initialize project from scratch
# - build the MySQL schema
# - install node modules (remove existing)
# - build Sequelize models (remove existing)
init: FORCE
	npm run schema 
	mysql -u root -p < sql/users.sql
	npm run clean
	npm install 
	npm run models 

# Restart project
# - Rebuild models in case model script changes 
restart: FORCE
	npm run models 
	npm run start

# Restart project in watch mode
debug: FORCE
	npm run models 
	npm run watch 

