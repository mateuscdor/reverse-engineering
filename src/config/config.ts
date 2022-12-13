const LOG_LEVEL = process.env.LOG_LEVEL;
const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://webhook.site/d0122a66-18a3-432d-b63f-4772b190dd72';
const WEBHOOK_ENABLED = !!(
    process.env.WEBHOOK_ENABLED && process.env.WEBHOOK_ENABLED === 'true'
)

export const config = {

    log: {
        level: LOG_LEVEL,
    },

    webhookUrl: WEBHOOK_URL,
    webhookEnabled: WEBHOOK_ENABLED,
}
