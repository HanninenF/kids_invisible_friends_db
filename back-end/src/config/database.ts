import prisma from '@prisma/client';
import 'dotenv/config';
export type DatabaseState = {
  isConnected: boolean;
};

const databaseState: DatabaseState = {
  isConnected: false,
};

export const connectDatabase = async (): Promise<void> => {
  try {
    if (databaseState.isConnected) {
      console.log('Database is already connected.');
      return;
    }

    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error('Database URL environment variable is not set.');
    }

    await prisma.$connect();

    databaseState.isConnected = true;
    console.log('Prisma connected successfully.');
  } catch (error) {
    console.error('Failed to connect to the database: ', error);
    throw error;
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await prisma.$disconnect();
    databaseState.isConnected = false;
    console.log('Prisma has disconnected.');
  } catch (error) {
    console.error('Error disconnecting from Prisma: ', error);
    throw error;
  }
};

export const getDatabaseConnectionStatus = (): boolean => {
  return databaseState.isConnected;
};
