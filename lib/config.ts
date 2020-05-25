export const REGION = process.env.REGION as string;
export const WEBSITE_NAME = process.env.WEBSITE_NAME  as string;
export const BUCKET_NAME = process.env.BUCKET_NAME  as string;
export const REPO_OWNER = process.env.REPO_OWNER  as string;
export const REPO_NAME = process.env.REPO_NAME  as string;

// you can change this to the branch of your choice
export const BUILD_BRANCH = '^refs/heads/master$';