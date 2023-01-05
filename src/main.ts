import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidateInputPipe } from "./core/pipes/validate.pipe";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000;
  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

bootstrap();
