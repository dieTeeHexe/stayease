import {objects} from './objects';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
  for(let object of objects){
    await prisma.property.create({
      data: object
    })
  }
}

main().catch(e => {
  console.log(e);
  process.exit(1);
}).finally(()=>{
  prisma.$disconnect
})