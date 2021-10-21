import { Injectable } from "@nestjs/common";
import { add } from '@nodez/math';

@Injectable()
class AppService {
  public add(x: number, y: number): number {
    return add(x, y);
  }
}

export { AppService };
