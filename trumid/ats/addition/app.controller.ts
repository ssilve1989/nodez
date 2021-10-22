import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { AdditionServiceController, AdditionServiceControllerMethods, AddRequest, AddResponse } from './proto/generated/trumid/ats/addition/proto/addition_service';

@AdditionServiceControllerMethods()
@Controller()
class AppController implements AdditionServiceController {
  constructor(private readonly service: AppService) {}

  @Post()
  add(@Body() { x, y }: AddRequest): AddResponse {
    return { result: this.service.add(x, y) }
  }
}

export { AppController };
