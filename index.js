#!/usr/bin/env node

const program = require('commander')

program
	.version('1.0.1')
	.command('cn [folder]','clean node_modules folder')


program.parse(process.argv)
