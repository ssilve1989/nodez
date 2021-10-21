import { NestFactory } from "@nestjs/core";
import { GrpcOptions, Transport } from "@nestjs/microservices";
// TODO: YUUUUUCKKKKK need to figure out what to do with js_library generated packages and these kind of paths
// the protogen in use will generate the nested directory under the package directory
// maybe use protobufjs_library instead like cockroach and see what thats like
import * as pb from '@nodez/addition-pb/pkg_pb/trumid/ats/addition/proto/addition_service_pb';
import { AppModule } from "./app.module";

console.log(pb);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<GrpcOptions>({
    options: {
      url: "localhost:5000",
      protoPath: 'trumid/ats/addition/proto/addition_service.proto',
      package: 'trumid.ats.addition',
    },
    transport: Transport.GRPC,
  });

  await app.startAllMicroservices();
  await app.listen(3000);
  console.log("addition service started");
}

bootstrap();
