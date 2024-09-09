const ffmpeg = require('fluent-ffmpeg'); // For video and audio conversion
const { exec } = require('child_process'); // For command-line operations

// Function to convert video to audio
const videoToAudio = (inputPath, outputPath) => {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .noVideo()
            .audioCodec('libmp3lame')
            .format('mp3')
            .on('end', () => {
                console.log('Conversion finished!');
                resolve(outputPath);
            })
            .on('error', (err) => {
                console.error('Error:', err);
                reject(err);
            })
            .save(outputPath);
    });
};

// Function to convert image formats
const imageConverter = (inputPath, outputPath) => {
    return new Promise((resolve, reject) => {
        exec(`convert ${inputPath} ${outputPath}`, (err, stdout, stderr) => {
            if (err) {
                console.error('Error:', err);
                reject(err);
            } else {
                console.log('Conversion finished!');
                resolve(outputPath);
            }
        });
    });
};

// Function to convert audio formats
const audioConverter = (inputPath, outputPath) => {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .audioCodec('libmp3lame')
            .format('mp3')
            .on('end', () => {
                console.log('Conversion finished!');
                resolve(outputPath);
            })
            .on('error', (err) => {
                console.error('Error:', err);
                reject(err);
            })
            .save(outputPath);
    });
};

// Export functions
module.exports = {
    videoToAudio,
    imageConverter,
    audioConverter
};
