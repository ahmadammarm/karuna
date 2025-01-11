import React from 'react'
import Link from 'next/link'
import { PhoneIcon } from 'lucide-react'
import { Card, CardContent, CardTitle } from '../ui/card'
import { Button } from '../ui/button'


interface PengembanganCardProps {
    title: string
}

const PengembanganCard: React.FC<PengembanganCardProps> = ({
    title
}) => {
    return (
        <div className="flex items-center justify-center h-screen px-4">
            <Card className="p-5">
                <CardTitle className="text-center">
                    Maaf, {title} masih dalam tahap pengembangan yaa
                </CardTitle>
                <CardContent>
                    <p className="text-center mt-5">
                        Jika ada pertanyaan, silahkan hubungi kami di
                    </p>
                    <div className="flex items-center justify-center mt-5">
                        <Link href="https://wa.me/6285746353092" target="blank">
                            <Button className="bg-green-600">
                                <PhoneIcon className="mr-2" size={16} /> Nomor Telepon Kami
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default PengembanganCard