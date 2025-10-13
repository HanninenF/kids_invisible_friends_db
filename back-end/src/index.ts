import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { connectDatabase, disconnectDatabase } from './config/database.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

const server = app.listen(PORT, () => {
  connectDatabase()
    .then(() => {
      console.log(`Server is running on port ${PORT}`);
    })
    .catch((error) => {
      console.error('Failed to start server: ', error);
      process.exit(1);
    });
});

const gracefulShutdown = (signal: string): void => {
  console.log(`Received ${signal}. Starting graceful shutdown...`);

  try {
    server.close(() => {
      console.log('HTTP server closed.');
      disconnectDatabase()
        .then(() => {
          console.log('Graceful shutdown complete.');
          process.exit(0);
        })
        .catch((err) => {
          console.error('Error during DB disconnect: ', err);
          process.exit(1);
        });
    });

    setTimeout(() => {
      console.error('Forced shutdown after timeout.');
      process.exit(1);
    }, 10000);
  } catch (error) {
    console.error('Error during graceful shutdown: ', error);
    process.exit(1);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception: ', error);
  gracefulShutdown('uncaughtException');
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at: ', promise, 'reason: ', reason);
  gracefulShutdown('unhandledRejection');
});
