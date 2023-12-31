import fs from 'fs';

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor(/**
   * DI - Dependency Injection
   * repository: StorageRepository
   */) {}

  execute({
    fileContent,
    fileDestination = 'outputs',
    fileName = 'table',
  }: Options) {
    try {
      //Crear la carpeta de outputs
      fs.mkdirSync(fileDestination, { recursive: true });

      //grabar el archivo de la tabla de 5
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
