export const site = {
	name: 'ZeroBit Consulting',
	tagline: 'Automating the smallest bit of work so you can focus on your customers.',
	email: 'zerobitconsulting@gmail.com',
	social: {
		instagram: 'https://www.instagram.com/zerobit_consult/',
		x: 'https://twitter.com/zerobit_consult'
	}
} as const;

export const nav = [
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' }
] as const;

export const services = [
	{
		code: '01',
		title: 'Process automation',
		summary:
			'We map the repetitive steps your team does by hand and replace them with scripts, workflows, and scheduled jobs that run without anyone babysitting them.',
		points: ['Workflow mapping', 'Scheduled jobs & bots', 'Spreadsheet-to-system migrations']
	},
	{
		code: '02',
		title: 'Integrations & APIs',
		summary:
			'Your tools should talk to each other. We connect SaaS platforms, internal systems, and data sources so information moves on its own.',
		points: ['API integrations', 'Webhooks & event pipelines', 'Data sync & cleanup']
	},
	{
		code: '03',
		title: 'Cloud & DevOps',
		summary:
			'Repeatable builds, push-button deploys, and infrastructure defined as code, so shipping is boring in the best way.',
		points: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting']
	},
	{
		code: '04',
		title: 'Secure by default',
		summary:
			'Automation that touches your data has to be trustworthy. Security reviews and sane defaults are built in, not bolted on.',
		points: ['Secrets management', 'Access reviews', 'Security-minded code review']
	}
] as const;
