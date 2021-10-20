import { NestFactory } from "@nestjs/core";
import path from 'path';
import { GrpcOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<GrpcOptions>({
    options: {
      url: "localhost:5000",
      protoPath: 'trumid/ats/addition/addition_service.proto',
      package: 'trumid.ats.addition',
    },
    transport: Transport.GRPC,
  });

  await app.startAllMicroservices();
  await app.listen(3000);
  console.log("addition service started");
}

bootstrap();
