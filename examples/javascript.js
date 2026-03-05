// Access the available environment variable.
const no_progress = process.env.NO_PROGRESS;

// We only enable spinners and progress bars if "undefined" or explicitly "0".
const enabled = no_progress === undefined || no_progress === '0';
