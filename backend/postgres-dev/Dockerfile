FROM postgres:latest

# Copy your SQL script to the init directory with the correct name format
COPY dump_file.sql /docker-entrypoint-initdb.d/

# Optionally, if you have additional initialization scripts, you can copy them as well
# COPY setup-databases.sh /docker-entrypoint-initdb.d/
