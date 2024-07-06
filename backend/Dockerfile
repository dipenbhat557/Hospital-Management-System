# Use Maven to build the application
FROM maven:3.8.4-openjdk-17-slim AS build
WORKDIR /backend
COPY . .
RUN mvn clean package -DskipTests

# Use the OpenJDK image to run the application
FROM openjdk:17-jdk-slim
WORKDIR /backend
COPY --from=build /backend/target/*.jar /backend/backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/backend/backend.jar"]
