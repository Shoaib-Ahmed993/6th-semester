

myDataFr=data.frame(read.csv("D://6th semester/Numerical Computing/palmbeachatlantic.csv"))
View(myDataFr)
plot(myDataFr)
cor(myDataFr)
palmBeachLM<-lm(myDataFr$Salary~myDataFr$Evaluation+myDataFr$Articles)
palmBeachLM
plot(fitted(palmBeachLM),resid(palmBeachLM))
qqnorm(resid(palmBeachLM))
summary(palmBeachLM)


palmBeachLM2<-lm(myDataFr$Salary ~ myDataFr$Articles)
palmBeachLM2
plot(fitted(palmBeachLM2),resid(palmBeachLM2))
qqnorm(resid(palmBeachLM2))
summary(palmBeachLM2)

predict(palmBeachLM, myDataFr)
