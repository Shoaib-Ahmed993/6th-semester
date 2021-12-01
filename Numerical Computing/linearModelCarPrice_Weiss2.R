age <- c(5,4,6,5,5,5,6,6,2,7,7)
price<- c(85,103,70,82,89,98,66,95,169,70,48)
condition <- c(3,5,2,3,3,4,1,4,5,2,0)
cardata <- data.frame(age,price,condition)

cor(cardata)
plot(cardata)
model1 <- lm(price ~ age+condition)
model1
summary(model1)
